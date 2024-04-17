pipeline {
    agent any

    stages {
        stage('Build and Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
                ]) {
                    sh '''
                    docker login --username $USERNAME --password $PASSWORD
                    docker-compose build
                    docker tag nodejs:latest gaurav1954/taskify:latest
                    docker push gaurav1954/taskify:latest
                    '''
                }
            }
        }
    }

}
