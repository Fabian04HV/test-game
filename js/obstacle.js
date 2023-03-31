class Obstacle{
  constructor(image){
    this.image = image
    this.x = 600
    this.y = random(400)
    this.width = 50
    this.height = 50
    this.velocity = 3
  }
  draw(){
    this.x -= this.velocity 
    image(this.image, this.x, this.y, this.width, this.height)
  }
  collision(playerInfo){
    let obstacleX = this.x + this.width / 2
    let obstacleY = this.y + this.height / 2

    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2

    if(dist(playerX, playerY, obstacleX, obstacleY) > 50){
      return false
    }
    else{
      playerInfo.score += 100
      document.querySelector("#score").innerText = playerInfo.score
      return true
    }
    
  }
}