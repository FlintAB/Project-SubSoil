import { useState } from "react"

import { useUploadWell } from "../../../entities/well/api/useUploadWell"

import styles from "./LasUploader.module.css"

export const LasUploader = () => {
   const uploadMutation = useUploadWell()

   const [fileName, setFileName] = useState(
      "Файл не выбран"
   )

   const uploadFile = (file: File) => {
      const formData = new FormData()

      formData.append("file", file)

      setFileName(file.name)

      uploadMutation.mutate(formData)
   }

   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const files = event.target.files

      if (!files) return

      Array.from(files).forEach(file => {
         uploadFile(file)
      })
   }

   const handleLoadDemo = async () => {
      const response = await fetch("/test-well.las")

      if (!response.ok) {
         throw new Error(
            "Не удалось загрузить демо-файл"
         )
      }

      const blob = await response.blob()

      const file = new File(
         [blob],
         "test-well.las",
         {
            type: "text/plain",
         }
      )

      uploadFile(file)
   }

   return (
      <div className={styles.card}>

         <div className={styles.header}>

            <div>
               <h3>Загрузка данных</h3>

               <p>
                  LAS или демо-набор
               </p>
            </div>
         </div>

         <div className={styles.content}>

            <label className={styles.uploadButton}>

               <span>
                  Выбрать файл
               </span>

               <input
                  type="file"
                  accept=".las"
                  multiple
                  onChange={handleChange}
                  hidden
               />
            </label>

            <button
               className={styles.demoButton}
               onClick={handleLoadDemo}
               disabled={uploadMutation.isPending}
            >

               <span>
                  {uploadMutation.isPending
                     ? "Загрузка..."
                     : "Загрузить демо-данные"}
               </span>
            </button>

            <div className={styles.fileInfo}>

               <span>
                  {fileName}
               </span>
            </div>

            {uploadMutation.isError && (
               <div className={styles.error}>
                  Ошибка загрузки файла
               </div>
            )}

            {uploadMutation.isSuccess && (
               <div className={styles.success}>
                  Файл успешно загружен
               </div>
            )}
         </div>

      </div>
   )
}