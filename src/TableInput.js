import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import VideoPlayer from 'react-video-js-player';

const TableInput = () => {
        const [video, setVideo] = useState({
        src: "http://www.example.com/path/to/video.mp4",
        poster: "http://www.example.com/path/to/video_poster.jpg"
    });
    const { control, handleSubmit } = useForm({
        defaultValues: {
            rows: [{ startingPoint: '', endPoint: '',caption: '' }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'rows'
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input />
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
                                    name={`startingpoint${index}`}
                                    control={control}
                                    defaultValue={item.name}
                                    render={({ field }) => <input {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    name={`endingPoint${index}`}
                                    control={control}
                                    defaultValue={item.age}
                                    render={({ field }) => <input {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    name={`caption${index}`}
                                    control={control}
                                    defaultValue={item.email}
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
        <VideoPlayer
        
        controls={true}
                        src={video.src}
                        poster={video.poster}
                        width="720"
                        height="420"
                                 />
        </>
    );
};

export default TableInput;