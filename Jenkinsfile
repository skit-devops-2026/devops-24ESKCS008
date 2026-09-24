pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh 'npm run lint || true'
            }
        }

        stage('Test Suite') {
            steps {
                echo 'Running Vitest test suite...'
                sh 'npm test'
            }
        }

        stage('Build Artifacts') {
            steps {
                echo 'Building production web assets...'
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace after pipeline execution...'
            cleanWs()
        }
        success {
            echo 'Jenkins Build Completed Successfully!'
        }
        failure {
            echo 'Jenkins Build Failed!'
        }
    }
}
