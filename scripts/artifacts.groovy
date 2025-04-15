def make() {
    archiveArtifacts artifacts: '**/*',
                   allowEmptyArchive: true,
                   fingerprint: true,
                   onlyIfSuccessful: true
}


return [
    make: this.&make
]