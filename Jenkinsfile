pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker run --rm --volume="$PWD:/srv/jekyll" jekyll/jekyll:3.4.3 jekyll build'
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
