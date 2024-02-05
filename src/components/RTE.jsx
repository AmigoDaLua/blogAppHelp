import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

function RTE({
    name,
    control,
    label,
    defaultValue = ""
}) {
  return (
    <div className='w-full'>
        {
            label && <label className='inline-block mb-1 pl-1'>
                {label}
            </label>
        }

        {/*O CONTROLLER existe pra lidarmos com 3rd prt FORMS/COMPONENTS*/}
        <Controller 
            name={name || 'content'}
            control={control}
            render={({field: {onChange}}) => (
                <Editor 
                initialValue={defaultValue}
                init={{
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    content_style: 'body {font-family:Segoe-UI, Georgia, sans-serif; font-size:14px }',

                }}
                onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}

export default RTE;