import {useState, useEffect} from 'react';
import {projectFirestore, projectStorage, timestamp} from '../firebase/config';

const useStorage = (file) => {
    // const [progress, setProgress] = useState(0);
    // const [error, setError] = useState(null);
    // const [url, setUrl] = useState(null);
    //
    // useEffect(() => {
    //     // ref
    //
    //     const storageRef = projectStorage.ref(file.name)
    //     //projectStorage.ref 명렁어
    //
    //     storageRef.put(file).on('state_changed', (snap) => {
    //         let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
    //         setProgress(percentage)
    //
    //     }, (err) => {
    //         setError(err);
    //     }, async() => {
    //         const url = await storageRef.getDownloadURL()
    //         setUrl(url);
    //     }, [file])
    // })
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('imags')
        // collection 폴더 같은 의미.

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createAt = timestamp();
            await collectionRef.add({url, createAt})
            setUrl(url);
        });
    }, [file]);

    return {progress, url, error}

}

export default useStorage;






