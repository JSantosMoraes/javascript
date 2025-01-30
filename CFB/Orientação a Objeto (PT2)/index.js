// MODOS >>TRADICIONAIS<< 

class Carro{
  canal = 'CFB Cursos' // Propriedade de exemplo
  constructor(pnome, ptipo){
      this.nome = pnome
      if(ptipo == 1){
          this.tipo = "Esportivo"
          this.velmax = 300
      }else if(ptipo == 2){
          this.tipo = "Utilitário"
          this.velmax = 100
      }else if(ptipo == 3){
          this.tipo = "Passeio"
          this.velmax = 160
      }else{
          this.tipo = "Militar"
          this.velmax = 180
      }
  }
  getNome(){
    return this.nome
  }
  getTipo(){
    return this.tipo
  }
  getVelmax(){
    return this.velmax
  }
  getInfo(){
    return [this.nome,this.tipo,this.velmax]
  }
  setNome(name){
    this.nome = name
  }
  setTipo(type){
    this.nome = type
  }
  setVelmax(velmaxi){
    this.nome = velmaxi
  }

  info(){ // criando um método
    console.log(`Nome: ${this.nome}`)
    console.log(`Tipo: ${this.tipo}`)
    console.log(`V.Max: ${this.velmax}`)
    console.log('---------------------')
  }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("bombadão",4)
let c4 = new Carro("Carrego tudo",3)

c1.setNome('Super Veloz')
c1.setTipo('Super Esportivo')
c1.setVelmax('500')

c1.info()

/*
c1.info()
c2.info()
c3.info()
c4.info()
*/

