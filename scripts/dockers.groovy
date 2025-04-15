def buildImage(imageName) {
    bat "docker build -t ${imageName} ."
}

def publishImage(imageName, repoName) {
    bat "docker tag ${imageName} ${repoName}"
    withCredentials(
        [
            usernamePassword(credentialsId: 'docker-hub-m',
            usernameVariable: 'MY_USER',
            passwordVariable: 'MY_PASSWORD')
        ]) {
        bat "docker login -u ${MY_USER} -p ${MY_PASSWORD}"
        bat "docker push ${repoName}"
        }
}

return [
    buildImage: this.&buildImage,
    publishImage: this.&publishImage
]