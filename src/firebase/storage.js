import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
  getMetadata,
} from 'firebase/storage'
import { storage } from './config'

const LIBRARY_PATH = 'library'

export async function uploadFile(file, category, onProgress) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const storageRef = ref(storage, `${LIBRARY_PATH}/${category}/${safeName}`)

  const uploadTask = uploadBytesResumable(storageRef, file, {
    customMetadata: {
      originalName: file.name,
      category,
      uploadedAt: new Date().toISOString(),
    },
  })

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        if (onProgress) onProgress(progress)
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        resolve({ url, path: uploadTask.snapshot.ref.fullPath })
      }
    )
  })
}

export async function listFiles(category) {
  const folderRef = category
    ? ref(storage, `${LIBRARY_PATH}/${category}`)
    : ref(storage, LIBRARY_PATH)

  try {
    if (category) {
      const result = await listAll(folderRef)
      const files = await Promise.all(
        result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef)
          const metadata = await getMetadata(itemRef)
          return {
            name: metadata.customMetadata?.originalName || itemRef.name,
            path: itemRef.fullPath,
            url,
            size: metadata.size,
            category,
            uploadedAt: metadata.customMetadata?.uploadedAt || metadata.timeCreated,
            contentType: metadata.contentType,
          }
        })
      )
      return files
    }

    // List all categories
    const result = await listAll(folderRef)
    const allFiles = []
    for (const prefix of result.prefixes) {
      const catName = prefix.name
      const catResult = await listAll(prefix)
      const files = await Promise.all(
        catResult.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef)
          const metadata = await getMetadata(itemRef)
          return {
            name: metadata.customMetadata?.originalName || itemRef.name,
            path: itemRef.fullPath,
            url,
            size: metadata.size,
            category: catName,
            uploadedAt: metadata.customMetadata?.uploadedAt || metadata.timeCreated,
            contentType: metadata.contentType,
          }
        })
      )
      allFiles.push(...files)
    }
    return allFiles
  } catch (err) {
    console.error('Error listing files:', err)
    return []
  }
}

export async function deleteFile(filePath) {
  const fileRef = ref(storage, filePath)
  await deleteObject(fileRef)
}

export function formatFileSize(bytes) {
  if (!bytes) return '—'
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}
