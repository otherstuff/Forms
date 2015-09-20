import Firebase from 'firebase';

const fbRef = new Firebase('https://formbuild.firebaseio.com/');

let updateData = (user = 'demo') => {
  let formMarkup = document.getElementById('formMarkup');
  fbRef.child(user).once('value', snap => {
    formMarkup.innerHTML = snap.val().rendered;
  });
};

let authData = fbRef.getAuth();
if (authData) {
  updateData(authData.uid);
  console.log(authData.uid);
} else {
  updateData();
  console.log('not logged in');
}

