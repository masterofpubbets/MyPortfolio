def buildImage(imageName) {
    bat "docker build -t ${imageName} ."
}

def publishImage(imageName, repoName) {
    bat "docker tag ${imageName} ${repoName}"
    bat "docker push ${repoName}"
}

return [
    buildImage: this.&buildImage,
    publishImage: this.&publishImage
]