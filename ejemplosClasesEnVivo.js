// let nombre ;

// const { resolve } = require("path")

// nombre ="coderhouse"

// function sumar(a,b){
//     return a+b
// }
// const resultado =sumar(8,9)
// console.log(resultado)

// let saludar = function(nombre){
//     console.log(`hola ${nombre},como estas?`)
// }

// saludar("shirly")
 
// setTimeout(function ( ){
//     console.log("han pasado 5 segundos")
// },5000)

// let numeros = [1,2,3,4,5]
// numeros.forEach(function (n){
//     console.log(n * 2)
// })

//scope (ambito de la viarble -alcanse)

// let nombre ="coderhouse"

// function saludar (){
//     console.log(`saludos ${nombre}`)
// //Adicion de ejemplo
// let nombre=true // alacnse local
// // adicion de ejemolo  de alcanse 
// // let nombre ="coderhouse "

// // ese ejemplo sale variable por definir  incorporaqndo let en la funcion
// }

// console.log(nombre)


//CLOUSERE

// function contador (){
//     let contador =0

//     function incrementar (){
//         contador ++
//         console.log(contador)

//     }
//     return incrementar 


// }

// let miContador =contador()

// console.log(miContador)

// miContador()
// miContador()
// miContador()    

//template string


// const nombre ="coder"
// const apellido= "house"
// const comision ="58055"
//  const mensaje =`Bienvenidos a ${comision}de ${nombre}${apellido}`
//  console.log(mensaje)

// const a=5
// const b= 10

// const resultado =`la suma de ${a} y ${b} es  ${a+b}`

// console.log(resultado)

// clases sintaxis  sencilla y orientada a objetos  para crearlos y definir los comportamientos

// class NombreDeClase{
//     constructor(nombre,edad){
//         this.nombre=nombre
//         this.edad=edad
// // codigo de iniciacion 
//     }
//     //metodo1
//     saludar(){
//         console.log(`Hola, nombre es ${this.nombre},tengo${this.edad}años`)

//     }
// }

// let Persona1 =new NombreDeClase("shirley",30)
// let Persona2= new NombreDeClase("MARIO",32)

// Persona1.saludar()
// Persona2.saludar()

// EJEMPLOS CON FUNCIONES

// function mostrarLista(lista){
//     if(lista.lengt > 0){
//         lista.forEach(element => {
//             console.log(element)           
//         })
//     }else{
//         console.log("lista vacia")
//     }
// }

// let datosPrueba =[]
// mostrarLista(datosPrueba)


// MULTIPLICADOR

// function crearMultiplicador(numero){
//     return function (segundo_numero){
//         return numero * segundo_numero
//     }
// }

// let duplicar = crearMultiplicador(2)
// let triplicar = crearMultiplicador(3)

// console.log(duplicar(6))
// console.log(triplicar(5))


// ejemplo de clase contador 

// class contador {
//     static cuentaGlobal = 0
//     constructor(responsable){
//         this.responsable = responsable
//         this.cuentaIndividual = 0
//     }

//     obtenerResponsable(){
//         return this.responsable
//     }
//     obtenerCuentaIndivicual (){
//         return this.cuentaIndividual
//     }
//     static obtenerCuentaGlobal(){
//         return contador.cuentaGlobal
//     }
//     contar(){
//         this.cuentaIndividual++
//         contador.cuentaGlobal++

//     }
// }

// //traer las instanciAS DE CONTADOR 

// const contador1 =new contador("persona1")
// const contador2 =new contador("persona2")

// // obtener el responsable  y cuenta individual de cada una de las instancias

// console.log(contador1.obtenerResponsable())
// console.log(contador1.obtenerCuentaIndivicual())

// console.log(contador2.obtenerResponsable())
// console.log(contador2.obtenerCuentaIndivicual())

// contador1.contar()
// contador2.contar()


// contador1.contar()
// contador2.contar()





// //obtener la cuenta global

// console.log(contador.obtenerCuentaGlobal())

// clase 2 video 3 


// let resultado =2** 3
// let base =5
// let exponente =2

// let resultado2= base ** exponente
// console.log(resultado2)

//array include: tue/ false TENER ENCUENTA PARA CODIFICAR 

// const numbers=[1,2,3,4,5,6]

// console.log(numbers.includes(3))


// const fruits=["apple","banana","oranges"]

// console.log(fruits.includes("grape"))

//ECMASCRIPS 8 operador nulling


// con null
// const nombre =null
// const nombrePorDefecto="coderhouse"

// const nombreCompleto= nombre ?? nombrePorDefecto

// console.log(nombreCompleto)


//ejemplo definiendo el nombre 
// const nombre ="shirly"
// const nombrePorDefecto="coderhouse"

// const nombreCompleto= nombre ?? nombrePorDefecto

// console.log(nombreCompleto)


//object.entries,objetc.valius,objetos.keys  IMPORTANTE

// const persona ={
//     nombre: "coder",
//     edad:20,
//     ciudad:"ibague"

// }
// const entradas= Object.keys(persona)
// console.log(entradas)

//este metodo nos permite saber que datos esta pidiendo 

// ejemplo de finally


// function ejemploPromesa (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito =true
//             if (exito){
//                 resolve("exito")
//             }else{
//                 reject("error")
//             }
//         }, 3000)
        
//     })
// }

// ejemploPromesa()
// .then((resultado) =>{
//     console.log(resultado)

// })
// .catch((error)=>{
//     console.log(error)
// })

// .finally(()=>{
//     console.log("la promesa a finalizado")
// })


// ejemplo clase 4
// const fs =require("fs")

// const guardarFechaYHora= () => {
//      const fechaYHhora = new Date().toString()


//      try{
//         fs.writeFileSync("fyh.txt",fechaYHhora)
//         console.log("Archivo creado correctamente")
//      } catch(error){
//         throw new Error("No puedo realizar la accion")
//      }
// }

// guardarFechaYHora()
// const leerArchivo = () => {
//     try {
//         const data = fs.readFileSync("fyh.txt","utf-8")
//         console.log(data)
//     } catch (error){
//         console.error("error de lectura")

//     }
// }
//  ejemplo en clase 4
// const fs = require ("fs")

// const leerPackageJson =() => {
   

//     try {
//         const data =  fs.readFileSync("package.json", "utf-8")
//         return data
        
//     } catch (error){
//         console.error("error d lectura")
//     }
// }

// const guardarJson=()=>{
//     const data =leerPackageJson()

//     try{
//         fs.writeFileSync("data.json", JSON.stringify(data))
//         console.log("Archivo creado correctmente")

//     }catch(error){
//         console.error("error al crear el archivo")
//     }
// }

// guardarJson()


// CLASE CINCO

// function numerosRandom(minimo,maximo,cantidad){
//     return Array.from ({length: cantidad},()=> Math.floor(Math.random()*(maximo -minimo +1))+minimo)
//   }
  
//   const numeros =numerosRandom(1,20,10000)
// //   console.log(numeros)
// const resultado ={}
// numeros.forEach(n => resultado[n]=(resultado[n] || 0)+ 1)
// console.log(resultado)

// // const fs =require("fs/promises")
// // const crypto =require("crypto")

// // class UserManager{
// //     constructor(){
// //         this.fillePath ="Userios.json"

// //     }
// // async createUser(user){
// //     const{nombre,apellido,username,password} =user

// //     const hashedPassword = crypto.createHash("sha256") .update(password).digest("hex")

// //     try{
// //         let users =[]
// //         if(await fs.access(this.fillePath).then(()=>true).catch(()=>fzlse)){
// //          user.JSON.parse(fileContent)
// //         }
// //         users.push({nombre,apellido,username,password: hashedPassword})
// //         await fs.writeFile(this.fillePath.JSON.stringify(users,null,2))
// //         console.log("usuario creado correctamente")
// //     }catch(error){
// //         console.error("error al crear el usuario"error )
// //     }

// // }
// // async validateuser(username,password){
// // try{
// //     if(await fs.access(this.fillePath).then(()=>true).catch(()=> false)){
// //         const fileContent =await fs.readFile(this.fillePath,"utf8")
// //         const users= JSON.parse(fileContent)

// //         const user = users.find(u => u.username === username)

// //         if(user){
// //             const hashedPassword = crypto.createHash("sha256").update
// //             (password).digest("hex")
// //             if(hashedPassword === user. password){
// //                 console.log("logueado")

// //             }else{
// //                 console.log("contraseña")
// //             }


// //         }else{
// //             console.log("usuario error no encontrado")
// //         }
// //     } else{
// //         console.log("no hay usuarios")
// //     }
    
    
    
// //     }
// //     catch (error) {
// //         console.log("error validar usuario")
// //     }
// // }
// // }

// falta seguir editando ejemplo


    
