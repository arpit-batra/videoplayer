import React, { useState, useRef } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

import ReactPlayer from 'react-player';

const TableInput = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            rows: [{ startingPoint: '', endPoint: '', caption: '' }]
        }
    });
    const [formData, setFormData] = useState({videoUrl:'',captionList:[]});
    const [currCaption, setCurrCaption] = useState("");

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'rows'
    });

    const onSubmit = (data) => {
        var list = [];
        for(var i=0;i< data.rows.length;i++){
            list.push({start:data[`startingPoint${i}`],end:data[`endPoint${i}`],caption:data[`caption${i}`]});
        }
        setFormData({...formData,captionList:list});
        console.log(list);
        console.log(data);
        console.log(`formData -> ${formData}`);
    };

    const handleUrlChange = (e) => {
        setFormData({...formData,videoUrl:e.target.value});
        console.log(formData);
      };
    

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='videoUrl' value={formData.videoUrl} onChange={handleUrlChange}/>
                <table>
                    <thead>
                        <tr>
                            <th>Starting Point</th>
                            <th>Ending Point</th>
                            <th>Caption</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <Controller
                                        name={`startingPoint${index}`}
                                        control={control}
                                        defaultValue={item.startingPoint}
                                        render={({ field }) => <input {...field} />}
                                    />
                                </td>
                                <td>
                                    <Controller
                                        name={`endPoint${index}`}
                                        control={control}
                                        defaultValue={item.endPoint}
                                        render={({ field }) => <input {...field} />}
                                    />
                                </td>
                                <td>
                                    <Controller
                                        name={`caption${index}`}
                                        control={control}
                                        defaultValue={item.caption}
                                        render={({ field }) => <input {...field} />}
                                    />
                                </td>
                                <td>
                                    <button type="button" onClick={() => remove(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={() => append({ startingPoint: '', endPoint: '', caption: '' })}>Add Row</button>
                <button type="submit">Submit</button>
            </form>
            <ReactPlayer url={formData.videoUrl} onDuration={(num)=>{
              console.log(`duration -> ${num}`);
            }} onProgress={(state)=>{
            var currentCaption =  formData.captionList.find(item=> item.start < state.playedSeconds && item.end > state.playedSeconds);
                setCurrCaption(currentCaption ==null ?  "" :  currentCaption.caption );
            console.log(`state -> ${state.playedSeconds}`);
            }} />
            <div>{currCaption}</div>
        </>
    );
};

export default TableInput;