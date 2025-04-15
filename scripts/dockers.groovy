def buildImage(imageName) {
    bat "docker build -t ${imageName} ."
}

def publishImage(imageName, repoName) {
    bat "docker tag ${imageName} ${repoName}"
    withCredentials([
        string(credentialsId: 'docker-hub-m', variable: 'pwd')
    ]) {
        bat "docker login -u masterofpubbets -p ${pwd}"
        bat "docker push ${repoName}"
    }
}

return [
    buildImage: this.&buildImage,
    publishImage: this.&publishImage
]