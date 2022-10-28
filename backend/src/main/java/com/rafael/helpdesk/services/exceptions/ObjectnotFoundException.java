package com.rafael.helpdesk.services.exceptions;

public class ObjectnotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ObjectnotFoundException(String message, Throwable cause) {
	}

	public ObjectnotFoundException(String message) {
		super(message);
	}

}
