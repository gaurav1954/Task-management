pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                // Build Docker image
                sh 'docker-compose build'
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
                ]) {
                    sh 'docker login --username $USERNAME --password $PASSWORD'
                    sh 'docker tag gaurav1954/taskify gaurav1954/taskify:latest'
                    sh 'docker push gaurav1954/taskify:latest'
                }
            }
    post{
         success{
            sh 'docker system prune -a --filter until=20s'
        }
    }
        }
    }
}
