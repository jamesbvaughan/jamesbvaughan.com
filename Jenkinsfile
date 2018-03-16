pipeline {
  agent {
    docker {
      image 'jekyll/jekyll'
    }
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'jekyll build'
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
