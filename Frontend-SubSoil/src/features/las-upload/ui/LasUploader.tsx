import { useUploadWell } from "../../../entities/well/api/useUploadWell"

export const LasUploader = () => {
   const uploadMutation = useUploadWell()

   const uploadFile = (file: File) => {
      const formData = new FormData();

      formData.append("file", file);

      uploadMutation.mutate(formData);
   };

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (!file) return

      uploadFile(file)
   }

   const handleLoadDemo = async () => {
      const response = await fetch('/test-well.las')

      if (!response.ok) {
         throw new Error("Не удалось загрузить демо-файл");
      }

      const blob = await response.blob()

      const file = new File(
         [blob],
         'test-well.las',
         {
            type: 'text/plain',
         },
      )

      uploadFile(file)
   }

   return (
      <div>
         <input
            type="file"
            accept=".las"
            onChange={handleChange}
            disabled={uploadMutation.isPending}
         />

         <button onClick={handleLoadDemo} disabled={uploadMutation.isPending}>
            {uploadMutation.isPending
               ? "Загрузка..."
               : "Загрузить демо-данные"}
         </button>

         {uploadMutation.isError && (
            <div>
               Ошибка загрузки файла
            </div>
         ) 
         ||
         uploadMutation.isSuccess && (
            <div>
               Файл успешно загружен
            </div>
         )}
      </div>
   )
}