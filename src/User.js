import React from 'react';
import Localbase from 'localbase'

function User() {
    let db = new Localbase('db')
    // console.log(db);
    db.collection('users').add({
        id: 1,
        name: 'Bill',
        age: 47
      })
    //   db.collection('users').doc({ id: 1 }).set({
    //     id: 4, 
    //     name: 'Pauline',
    //     age: 27
    //   })
    //   db.collection('users').doc({id:4}).update({
    //     id:1,
    //     name:'suresh',
    //     age:23
    //   })


//       db.collection('users')
//   .add({
//     id: 1,
//     name: 'Bill',
//     age: 47
//   }, 'mykey-1')
//   .then(response => {
//     console.log(response.data,'Add successful, now do something.')
//   })
//   .catch(error => {
//     console.log(error,'There was an error, do something else.')
//   })
      db.collection('users').add({
        id: 2,
        name: 'Roy',
        age: 67
      })
      
    // db.collection('users').doc({id:2}).delete()
    db.collection('users').add({
        id: 3,
        name: 'suresh',
        age: 23
      })
      db.collection('users').doc({id:3}).update({
        name: 'R',
       
      })
      db.collection('users').doc('mykey-2').set({
        id: 4, 
        name: 'Pauline',
        age: 27
      })
      db.collection('users').doc('mykey-2').update({
    
        name: 'line',
        
      })
      db.collection('users').get().then(users => {
        console.log(users,"ljodjdojl")
      })

  return (
    <div>
        <h1>User</h1>

    </div>
  )
}

export default User