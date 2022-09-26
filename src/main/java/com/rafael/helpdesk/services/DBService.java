package com.rafael.helpdesk.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.rafael.helpdesk.domain.Chamado;
import com.rafael.helpdesk.domain.Cliente;
import com.rafael.helpdesk.domain.Tecnico;
import com.rafael.helpdesk.domain.enums.Perfil;
import com.rafael.helpdesk.domain.enums.Prioridade;
import com.rafael.helpdesk.domain.enums.Status;
import com.rafael.helpdesk.repositories.ChamadoRepository;
import com.rafael.helpdesk.repositories.PessoaRepository;

@Service
public class DBService {

	@Autowired
	private PessoaRepository pessoaRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;
	@Autowired
	private BCryptPasswordEncoder encoder;

	public void instanciaDB() {
		Tecnico tec1 = new Tecnico(null, "Rafael Moreira", "550.482.150-95", "rafael@mail.com", encoder.encode("1234"));
		tec1.addPerfil(Perfil.ADMIN);
		Tecnico tec2 = new Tecnico(null, "Richard Raff", "903.347.070-56", "richard@mail.com", encoder.encode("1234"));
		Tecnico tec3 = new Tecnico(null, "Andressa de Paula", "271.068.470-54", "andressa@mail.com", encoder.encode("1234"));
		
		Cliente cli1 = new Cliente(null, "Alberto Aipim", "111.661.890-74", "aipim@mail.com",	encoder.encode("1111"));
		Cliente cli2 = new Cliente(null, "Maria Curada", "322.429.140-06", "curada.maria@mail.com", encoder.encode("1111"));
		Cliente cli3 = new Cliente(null, "Carlos Sóvin", "792.043.830-62", "sovincarlos@mail.com", encoder.encode("1111"));

		Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 1", "Teste chamado 1", tec1, cli1);
		Chamado c2 = new Chamado(null, Prioridade.ALTA, Status.ABERTO, "Chamado 2", "Teste chamado 2", tec1, cli2);
		Chamado c3 = new Chamado(null, Prioridade.BAIXA, Status.ENCERRADO, "Chamado 3", "Teste chamado 3", tec2, cli3);
		Chamado c4 = new Chamado(null, Prioridade.ALTA, Status.ABERTO, "Chamado 4", "Teste chamado 4", tec3, cli3);
		Chamado c5 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 5", "Teste chamado 5", tec2, cli1);
		Chamado c6 = new Chamado(null, Prioridade.BAIXA, Status.ENCERRADO, "Chamado 7", "Teste chamado 6", tec1, cli3);

		pessoaRepository.saveAll(Arrays.asList(tec1, tec2, tec3, cli1, cli2, cli3));
		chamadoRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5, c6));
	}
}
