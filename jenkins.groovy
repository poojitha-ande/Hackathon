pipeline {
    agent any
 
    stages {
        
        // 1 fecthing project from git repository
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jitendra-jitu/Hackathon-Coursera'
            }
        }
 
        // 2 installing dependencies
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npm install -D allure-playwright'
                // bat 'npm install -g allure-commandline --force'
            }
        }
 

        // 3 running tests
        stage('Run Tests') {
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test'         
            }
        }
 
        // stage('Generate Allure Report') {
        //     steps {
        //         bat 'allure generate ./allure-results --clean -o ./allure-report'
        //     }
        // }
    }
 
    post {
        always {

            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive:
true
 
 
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
        }
    }
}







