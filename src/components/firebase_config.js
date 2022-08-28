import React,{useEffect, useState} from 'react'
import {initializeApp} from 'firebase/app'
import {getFirestore,collection,getDocs,
        addDoc,deleteDoc,doc,
        onSnapshot,query,where,
        startAt,endAt,orderBy,serverTimestamp,getDoc,updateDoc} from 'firebase/firestore'       
import {useQuery,useMutation} from 'react-query';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCPqk9e41urmmT831ZWhYEFG3Veokmc2XE",
    authDomain: "fir-revision-13ee5.firebaseapp.com",
    projectId: "fir-revision-13ee5",
    storageBucket: "fir-revision-13ee5.appspot.com",
    messagingSenderId: "710717376782",
    appId: "1:710717376782:web:3a9b9829a9b3bc6b9bef5f",
    measurementId: "G-7V29TEK046"
  };

initializeApp(firebaseConfig); 
  function Firebase() {
    let [carParameters,setCarParameters] = useState({name:'',horsePower:''});
    let [typesLength,setTypesLength] = useState([1]);
    let [realTimeData,setRealTimeData] = useState([])
    let [singleBMW,setSingleBMW] = useState([]);
    let [updateKey,setUpdateKey] = useState('');
    const finishTypes = (e) => {
      e.preventDefault();  
      let arr = [];
      for(let i = 2; i < e.target.length - 2; i++) {
        arr.push( e.target[i].value);
      }
      console.log(arr);
      addDoc(cars,{...carParameters,type:arr,createdTime:serverTimestamp()})
      addDoc(vehicles,{...carParameters,type:arr,createdTime:serverTimestamp()});
      setTimeout(() => {
        setTypesLength([1]);
        setCarParameters({name:'',horsePower:''})
      },1000);
    }

     // here I initialized my firebase 
  
  // here I am initializing my firestore
  const db = getFirestore(); 
  const auth = getAuth();

  // here i am aborting my cars collection
  const cars = collection(db,'cars');
  const vehicles = collection (db,'vehicles');
  // gettting data from firestore

  getDocs(cars).then((snapshot) => {
    let cars = [];
    snapshot.docs.forEach((doc) => {
     cars.push({...doc.data(),id:doc.id})
    })
    console.log(cars)
  })
  // query RANGE
 let queryCarRange = query(cars,orderBy('horsePower'),startAt(1000),endAt(1800));
  
 // query
 let querySearch = query(cars,where('name','==','BMW'));

 let superCars = query(cars,orderBy('createdTime'));
 // requesting through use query
  const {data,isLoading,isError,error} = useQuery('cars',() => {
    return getDocs(cars)
      },{ select: (snapshot) => {
            let cars = [];
            snapshot.docs.forEach((doc) => {
                cars.push({...doc.data(),id:doc['id']})
              })
            return cars
        }})  
// requesting single item in firestore
        
        let bmwDoc = doc(db,'cars','GqKwlZVH20Ujz9Ffvk1D');
        
        
  console.log(data);
      useEffect(() => {
        onSnapshot(queryCarRange,(snapshot) => {
        setRealTimeData(snapshot.docs.map( (doc) => {
          return {...doc.data(),id:doc.id}
          }));

      })
      onSnapshot(querySearch,(snapshot) => {
        let arr = [];
          snapshot.docs.forEach(doc => {
            arr.push({...doc.data(),id:doc.id})
          })
          console.log(arr);
      })
      onSnapshot(superCars,(snapshot) => {
        let arr = [];
        snapshot.docs.forEach(item => {
          arr.push({...item.data(),id:item.id})
        })
        console.log(arr)
      })
      onSnapshot(bmwDoc,(doc) => {
        setSingleBMW([{...doc.data(),id:doc.id}])
      })
      
      getDoc(bmwDoc).then(doc => {
        console.log(doc.data());
      })
      },[])
      console.log(singleBMW)

   console.log(realTimeData)
  
  
   function deleteCar(value,id) {
    if(value) {
      let data = doc(db,'cars',id);
      console.log(data.data())
      deleteDoc(data);
    }
  }     
  
  function updateCar(e) {
    e.preventDefault();
    let key = doc(db,'cars',updateKey);
    updateDoc(key,{
      name:e.target[0].value,
      horsePower:+e.target[1].value,
    })
  }

  function LoginWithEmailAndPassword(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,e.target[0].value,e.target[1].value)
    .then(cred => {
      console.log('user:',cred.user);
      console.log(cred.user.accessToken) 
      e.reset();
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

    return (<>
      <h2>HP 1000+ cars list</h2>
      <div>{realTimeData.map(item => <div key={item.id}>
        <div>
           <span style={{fontSize:'25px',fontWeight:'bold',color:'orange'}}>{item.name}</span>
           :<span style={{fontSize:'18px',fontWeight:500,color:'red'}}>{item.type}</span>
        <input type={'checkbox'} onClick={() => {setUpdateKey(item.id)}} />
        </div>
      </div>
      )}</div>
      <form onSubmit={updateCar}>
        <input type={'text'} id="name" required placeholder='for name'/>
        <input type={'text'} id="horsePower" required placeholder='for horsePower' />
        <button type='submit'>Submit</button>
      </form>
      <h2>All cars List</h2>
      <div>{data.map(item => <div key={item.id}>
        <div>
           <span style={{fontSize:'25px',fontWeight:'bold',color:'orange'}}>{item.name}</span>
           :<span style={{fontSize:'18px',fontWeight:500,color:'red'}}>{item.type}</span>
        <input type={'checkbox'} onClick={(e) => {deleteCar(e.target.value,item.id)}} />
        </div>
      </div>
      )}</div>  
      <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <form onSubmit={finishTypes} style={{width:'auto',margin:'0 auto'}}>
        <h2>Add new car</h2><br />
        <label htmlFor='name'>Name:</label><br/>
        <input type={'text'} id='name' value={carParameters.name} onChange={(e) => setCarParameters({...carParameters,name:e.target.value})} name='name' required placeholder='Type name...'/><br/>
        <label htmlFor='horsePower'>Horse Power:</label><br/>
        <input type={'text'} id='horsePower' value={carParameters.horsePower} onChange={(e) => setCarParameters({...carParameters,horsePower:+e.target.value})} name='horsePower' required placeholder='Type horse power...' />
        {typesLength.map((item,index) => <div key={index}>
            <label htmlFor={'type' + index}>Car Type</label><br/>
            <input type={'text'} id={'type' + index} name={'type' + index} required />
          </div>)}
          <button onClick={() => setTypesLength([...typesLength,1])} >Add Type</button>
          <button type={'submit'}>Finish Types</button>
          </form>
          <form onSubmit={LoginWithEmailAndPassword}>
            <label htmlFor='email' >Email:</label><br />
            <input type={'email'} id='email' name='email' required placeholder='email...'/><br />
            <label htmlFor='password'>password:</label><br />
            <input type={'text'} id='password' name='password' required placeholder='password...'/><br/>
            <button type='sumbit'>Submit</button>
            <button type='reset'>Reset</button>
          </form>
      </div>
      
      </>)
  }
  
  export default Firebase
 