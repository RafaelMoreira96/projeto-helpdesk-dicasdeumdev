package com.rafael.helpdesk.services.exceptions;

public class DataIntegrityViolationException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public DataIntegrityViolationException(String message, Throwable cause) {
	}

	public DataIntegrityViolationException(String message) {
		super(message);
	}

}
