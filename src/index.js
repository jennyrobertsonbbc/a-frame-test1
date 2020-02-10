window.onload = () => {
    AFRAME.registerComponent('log', {
        schema: {
          message: {type: 'string', default: 'Hello, World!'}
        },
      
        init: function () {
          console.log(this.data.message);
        }
      });
    console.log('yo');
    document.getElementById("box").setAttribute("rotation", "30 30 29");
    document.getElementById("box").setAttribute("rotation", "30 30 29");
};