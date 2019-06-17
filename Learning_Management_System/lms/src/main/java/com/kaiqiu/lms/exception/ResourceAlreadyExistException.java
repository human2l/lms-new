package com.kaiqiu.lms.exception;

public class ResourceAlreadyExistException extends RuntimeException{
	
	public ResourceAlreadyExistException() {
		super();
	}
	
	public ResourceAlreadyExistException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public ResourceAlreadyExistException(String message) {
		super(message);
	}
	
	public ResourceAlreadyExistException(Throwable cause) {
		super(cause);
	}
}
