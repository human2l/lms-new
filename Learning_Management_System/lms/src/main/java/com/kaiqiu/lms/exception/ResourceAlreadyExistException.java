package com.kaiqiu.lms.exception;

public class ResourceAlreadyExistException extends RuntimeException{
	
	private static final long serialVersionUID = 2023963488657230400L;

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
