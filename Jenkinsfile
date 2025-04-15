def gv
def dok
pipeline {
    agent any
    environment {
        NEW_VERSION = '1.0.0'
    }
    parameters {
        string(name: 'str1', defaultValue: '', description: 'blabla')
        choice(name: 'list1', choices: ['A', 'B', 'C'], description: '')
        booleanParam(name: 'chk', defaultValue: false, description: '')
        booleanParam(name: 'runTest', defaultValue: false, description: '')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Init') {
            steps {
                script {
                    gv = load './scripts/scripts.groovy'
                    dok = load './scripts/dockers.groovy'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    gv.buildApp()
                }
            }
        }

        stage('Test') {
            when {
                expression {
                    params.runTest == true
                }
            }
            steps {
                // Example: Run unit tests or other tests
                echo 'Running tests...'
            }
        }

        stage('Build Docker Image') {
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                script {
                    dok.buildImage('my-portfolio')
                }
            }
        }

        stage('Publish Docker Image') {
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                script {
                    dok.publishImage('my-portfolio', 'masterofpubbets/my-portfolio')
                }
            }
        }
    }

    post {
        always {
            // Cleanup or send notifications
            echo 'Pipeline finished!'
        }
        success {
            // Cleanup or send notifications
            echo 'Pipeline success!'
        }
        failure {
            // Cleanup or send notifications
            echo 'Pipeline failure!'
        }
    }
}
