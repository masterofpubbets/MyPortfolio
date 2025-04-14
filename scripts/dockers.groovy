def buildImage(imageName) {
    bat "docker build -t ${imageName} ."
}

return [
    buildImage: this.&buildImage
]