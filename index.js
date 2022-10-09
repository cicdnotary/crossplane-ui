const k8s = require('@kubernetes/client-node');
const stream = require('stream');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);


k8sApi.listNamespacedPod('default' , 'true')
.then((res) => {
  var eventsTotal= res.body.items.length
  console.log(res.body)
  console.log(res.body.items)

});

/*k8sApi.listNamespacedEvent('default')
    .then((res) => {
        var eventsTotal= res.body.items.length
        //console.log(res.body.items.length)
        let i = 1;
        while (i<eventsTotal){
	        console.log(res.body.items[i].message);
            i++
         }
    });
*/


/*k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.body);
});*/
/*
  body: CoreV1EventList {
    apiVersion: 'v1',
    items: [
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event],
      [CoreV1Event], [CoreV1Event]
    ],
*/


   
  
  /*
  async function main () {
    try {
    
    } catch (err) {
      console.error('Error: ', err)
    }
  }
  
  main()
  */