# Use OpenJDK 17 base image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/MyBudget-0.0.1-SNAPSHOT.jar /app/my-budget-app.jar

# Expose the port on which the application runs
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/my-budget-app.jar"]
