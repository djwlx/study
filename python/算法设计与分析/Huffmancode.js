function huff(){
    this.name=null
    this.father=null
    this.left=null
    this.right=null
    this.weight=null
}

var a=[{name:'A',pin:'10'},{name:'B',pin:'7'},{name:'C',pin:'5'},{name:'D',pin:'3'},{name:'E',pin:'2'},{name:'F',pin:'8'}]


var list=[]
var obj={}

for(var i=0;i<a.length; i++)
{
    
    obj=new huff()
    obj.name=a[i].name
    obj.weight=a[i].pin

    list.push(obj)
    console.log(obj)
}
var d=a.length
for(var i=0;i<d; i++)
{
    // 寻找权重最小的
   

}
