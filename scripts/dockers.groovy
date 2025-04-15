def buildImage(imageName) {
    bat "docker build -t ${imageName} ."
}

def publishImage(imageName, repoName) {
    bat "docker tag ${imageName} ${repoName}"
    withCredentials([
        usernamePassword(credentials: 'docker-hub-m', usernameVariable: usr, passwordVariable: pass)
    ]) {
        bat "docker login -u ${usr} -p ${pass}"
        bat "docker push ${repoName}"
    }
}

return [
    buildImage: this.&buildImage,
    publishImage: this.&publishImage
]