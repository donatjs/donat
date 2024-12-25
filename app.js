app={
  donat:function(){
    d.gebi('content').innerHTML='halo DonatJS';
  },
  bayam:function(){
    d.model.button.data=data=[
    {id:3,nama:"tiga",isi:250,icon:"geo",url:"alert('halo bayam')"},
    {id:2,nama:"dua",isi:75,icon:"person",url:"d.modal('halo donat')"},
    {id:1,nama:"satu",isi:250,icon:"bayam",url:"app.donat()"},
    ];
    out=`Bismillah,</br></br>`;
    out+=d.view.button(d.model.button);
    d.gebi('content').innerHTML=out;
  },
}
