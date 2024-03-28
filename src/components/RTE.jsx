import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
function RTE({name,control,label,defaultValue=""}) {
    return (
        <div className='w-full'>
            label && <label className='inline-block mb-1 pl-1'>{label}</label>

            <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                apiKey='2lorfwpzztjve4jussw0737fh90gs7koixq1kfsq8f3j4yzh'
                initialValue={defaultValue}
                init={{
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    // plugins: [
                    //     'advlist autolink lists link image charmap print preview anchor',
                    //     'searchreplace visualblocks code fullscreen',
                    //     'insertdatetime media table paste code help wordcount'
                    // ],
                    // toolbar: 'undo redo | formatselect | ' +
                    //     'bold italic backcolor | alignleft aligncenter ' +
                    //     'alignright alignjustify | bullist numlist outdent indent | ' +
                    //     'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }
            }
            onEditorChange={onChange}
        />
        )}
        />
        </div>
    )
}

export default RTE
