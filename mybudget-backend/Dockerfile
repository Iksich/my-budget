FROM openjdk:17-jdk-slim

# Copy the JAR file into the container
COPY target/MyBudget-0.0.1-SNAPSHOT.jar /app/MyBudget.jar

# Set the working directory
WORKDIR /app

# Specify the command to run the JAR file
ENTRYPOINT ["java", "-jar", "MyBudget.jar"]

# Expose the port your application will run on
EXPOSE 8080
