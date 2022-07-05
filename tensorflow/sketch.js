function setup (){
  noCanvas();

  


  // console.log(data);
  // tense.data().then ((stuff) => {
  //   console.log(stuff);
  // });

  // tense.print();
  // console.log(tense.dataSync());

}

function draw(){
  const values = [];
  for(var i = 0 ; i < 15 ; i++){
    values[i] = random (0 , 100 );
  }

  const shape= [5,3];

  const a = tf.tensor2d(values , shape , 'int32');
  const b = tf.tensor2d(values , shape , 'int32');
  const bb = b.transpose();
  const c = a.matMul(bb);


  a.dispose();
  b.dispose();
  bb.dispose();
  c.dispose();

console.log(tf.memory().numTensors);

}
