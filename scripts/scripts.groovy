def buildApp() {
    echo "building application...."
}

return [
    buildApp: this.&buildApp
]