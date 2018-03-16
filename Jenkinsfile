pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
               sh 'bundle exec jekyll build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
