/*class student {
    constructor(Name,lastname,id){
        this.Name=Name
        this.lastname=lastname
        this.id=id
    }
    getfullname(){
        return this.Name + " " + this.lastname
    }
    grtedit(newname){
        var nname = newname.split(" ")
        this.Name = nname[0]
        this.lastname = nname[1]
    }
}
var std1 = new student("robin","alert",45)
console.log(std1)
console.log(std1.getfullname())
std1.grtedit("jason clay")
console.log(std1.getfullname())



class employee {
    constructor (Name , lastname , salary){
        this.Name=Name
        this.lastname=lastname
        this.salary=salary
    }
    getfullname(){
        return this.Name + " " + this.lastname
    }
    getedit(newname){
       var nname =  newname.split(" ")
       this.Name = nname[0]
       this.lastname = nname[1] 
    }
}
var emp1 = new employee("albert","sky",85000)
console.log(emp1)
console.log(emp1.getfullname())
emp1.getedit("newton farnades")
console.log(emp1.getfullname())
*/

class employee {
    constructor (Name , middlename , lastname , salary){
        this.Name=Name
        this.middlename=middlename
        this.lastname=lastname
        this.salary=salary
    }
    getfullname(){
        return this.Name + " " + this.middlename+ " " + this.lastname
    }
    getedit(newname){
       var nname =  newname.split(" ")
       this.Name = nname[0]
       this.middlename=nname[1]
       this.lastname = nname[2] 
    }
}
var emp1 = new employee("albert", "mickel" , "sky" , 85000)
//console.log(emp1)
//console.log(emp1.middlename)
console.log(emp1.getfullname())
emp1.getedit("newton noha farnades")
console.log(emp1.getfullname())
//console.log(emp1.middlename)