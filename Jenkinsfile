def gv = load('./scripts/scripts.groovy')
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
                // Checkout code from your repository
                checkout scm
            }
        }
        stage('Init') {
            steps {
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

        stage('Deploy') {
            steps {
                // Example: Deploy your application
                echo 'Deploying the application...'
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
