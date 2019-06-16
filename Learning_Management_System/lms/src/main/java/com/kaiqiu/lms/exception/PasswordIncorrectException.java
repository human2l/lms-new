package com.kaiqiu.lms.exception;

public class PasswordIncorrectException extends RuntimeException{
	
	public PasswordIncorrectException() {
		super();
	}
	
	public PasswordIncorrectException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public PasswordIncorrectException(String message) {
		super(message);
	}
	
	public PasswordIncorrectException(Throwable cause) {
		super(cause);
	}
}
