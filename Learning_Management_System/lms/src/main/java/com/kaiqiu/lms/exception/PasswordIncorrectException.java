package com.kaiqiu.lms.exception;

public class PasswordIncorrectException extends RuntimeException{
	
	private static final long serialVersionUID = 8820486876722381739L;

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
