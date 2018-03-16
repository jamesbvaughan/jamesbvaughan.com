pipeline {
  agent {
    docker {
      image 'jekyll/builder:3.4'
      args '--rm --volume="$PWD:/srv/jekyll" -it'
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
