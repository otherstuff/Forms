import Firebase from 'firebase';

const fbRef = new Firebase('https://formbuild.firebaseio.com/');

export function saveForm(data) {
  fbRef.set({models: data.models, rendered: data.rendered});
}
