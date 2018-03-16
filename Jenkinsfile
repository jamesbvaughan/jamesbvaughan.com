pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
      args '--user="1000:1000" --volume="$PWD:/srv/jekyll"'
    }
  }
  stages {
    stage('Build') {
      steps {
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
