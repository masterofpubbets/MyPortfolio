def buildImage(imageName) {
    sh "docker build -t ${imageName} ."
}

return [
    buildImage: this.&buildImage
]