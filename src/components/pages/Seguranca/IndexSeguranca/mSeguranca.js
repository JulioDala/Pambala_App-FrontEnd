import React from 'react';
import './mSeguranca.css'


export default function SegurancaModal ({CloseMosal}){
	return(
		<>
		<div className='Fundo'>
			<div className='mSeguranca'>
				<div className='item'>
					<div className='titulo'> <span> Segurança </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							 São cada vez mais comuns os casos de golpistas que recorrem à tecnologia de informação (chamados cybercriminosos) para cometer crimes na internet, os quais utilizam várias técnicas para atrair as vítimas.

Esses cybercriminosos exploram fragilidades dos usuários, procuram enganar e persuadir suas vítimas a fornecerem informações sensíveis ou a realizarem alguma ação que possa comprometer a segurança deles e de toda uma organização.

Conheça as formas mais comuns desses golpes, suas consequências e dicas de prevenção.
						 </div>
					 </div>
					<div className='titulo'> <span> Boato (ou hoax) </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							 A mensagem tem conteúdo falso e alarmante e  geralmente é enviada por uma empresa importante ou órgão governamental, e até mesmo por um conhecido. Pode trazer problemas tanto para aqueles que a recebem e distribuem, como para aqueles que são citados em seu conteúdo, como conter códigos maliciosos, espalhar desinformação pela Internet, comprometer a credibilidade e a reputação de pessoas envolvidas. Com a leitura atenta de uma mensagem desse tipo é possível identificar informações sem sentido e tentativas de golpes, como correntes e pirâmides. Não deixe que sua boa vontade o impeça de verificar a procedência e de conferir a veracidade do conteúdo da mensagem.
						 </div>
					 </div>	 
					<div className='titulo'> <span> Pharming </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							golpe que envolve o redirecionamento da navegação do usuário para sites falsos. A consequência será o vazamento de dados pessoais e financeiros, com possível perda financeira. Desconfie se, ao digitar o endereço do site no navegador, você for redirecionado para outro site, o qual tenta realizar alguma ação suspeita, como abrir um arquivo ou instalar um programa. Para se proteger, escolha um provedor de internet confiável, verifique se há erros no nome do endereço do site que você quer acessar e sempre siga as dicas e orientações sobre segurança da informação. Se você está desconfiado de um site, inclusive de um banco, faça login com uma senha errada. Como um site falso não tem como conferir a sua senha, a próxima tela mostrará que é golpe.
						 </div>
					 </div>	 
					 <div className='titulo' > <span> Phishing </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							 um golpista tenta obter dados pessoais e financeiros de um usuário utilizando técnicas de engenharia social. A consequência pode ser o vazamento de informações pessoais e financeiras, além de infectar o computador com códigos maliciosos. Fique atento a mensagens recebidas que tentem induzi-lo a fornecer informações, instalar ou executar programas ou clicar em links. Acesse a página da instituição que supostamente enviou a mensagem e procure por informações.
						 </div>
					 </div>
					 <div className='titulo' > <span> Golpes de comércio eletrônico </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							exploram a relação de confiança do usuário nos negócios on-line. A vítima pode ser atraída por uma oferta imperdível e não receber a mercadoria ¿comprada¿ ou o pagamento por um produto ¿vendido¿, além de passar dados seus ao golpista. Algumas dicas para prevenção para esse tipo de golpe:

desconfie se o valor do produto está muito abaixo do de outros fornecedores confiáveis;
pesquise na internet sobre o site antes de efetuar a compra para ver a opinião de outros clientes;
acesse sites especializados para verificar se há reclamações referentes à empresa;
fique atento a propagandas recebidas por spam ou redes sociais;
utilize sistemas confiáveis de pagamentos para impedir que seus dados pessoais e financeiros sejam enviados ao golpista;
em caso de venda, confirme que recebeu o pagamento diretamente na sua conta bancária ou pelo site do sistema de pagamentos (não confie apenas em e-mails ou comprovantes de depósito, pois podem ser falsos);
acesse todos os sites, tanto de pagamentos quando de vendas, diretamente do navegador, e não por links recebidos em mensagens;
mesmo que o vendedor lhe envie o código de rastreamento fornecido pelos Correios, saiba que isso não basta para comprovar o envio e liberar o pagamento.
						 </div>
					 </div>
					 <div className='titulo' > <span> Antecipação de recursos </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							um golpista induz a vítima a fornecer informações confidenciais ou a realizar um pagamento adiantado com a promessa de que esta receberá um benefício. Em algum tempo, a vítima percebe que o benefício não existe, que foi vítima de um golpe e que seus dados e/ou dinheiro ficaram com o golpista. Desconfie de situações em que é necessário efetuar um pagamento antecipado para receber um valor maior. Não se empolgue tão rápido com uma possibilidade de ganhar dinheiro, nem sequer responda a esse tipo de oportunidade. Se acreditar que pode ter algum valor a receber, tome a iniciativa de procurar informações oficiais.
						 </div>
					 </div>	  
					 <div className='titulo' > <span> Furto de identidade </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							alguém se passa por outra pessoa para obter vantagens ilícitas. A vítima poderá perder dinheiro e temporariamente crédito, ou até ter sua reputação abalada. Pode ser demorado e trabalhoso reverter todos os problemas causados pelo impostor. A melhor forma de impedir que sua identidade seja usada por terceiros é proteger o acesso aos seus dados e às suas contas de usuário.
						 </div>
					 </div>
					  <div className='titulo' > <span> Golpes de reparos </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							Em um golpe que começa no mundo real e rapidamente segue para o virtual, você recebe uma ligação de um funcionário que diz trabalhar na "Microsoft" ou em outra grande empresa de software para resolver problemas no computador, como lentidão na Internet ou no tempo de carregamento. Parece útil. Quando chega um e-mail em sua caixa de entrada, você baixa um programa de acesso remoto que os golpistas usam para assumir o controle de seu computador e instalar malware. Nem todos os clientes conhecem bem a tecnologia, por isso, muitos não sabem como funciona um computador e acabam sendo facilmente manipulados pelos golpistas. Depois que instalam o malware, eles têm acesso a seus arquivos, dados e informações pessoais.

Nunca aceite reparos não solicitados e não compre serviços de manutenção, a menos que saiba exatamente com quem está falando. Não permita que ninguém acesse o seu computador remotamente. Se alguém ligar, peça informações de identificação. Se você fizer muitas perguntas, o golpista perceberá que você não é fácil de enganar.
						 </div>
					 </div>	 
					 <div className='titulo' > <span> Golpes de fraude em organizações filantrópicas </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							Depois de grandes desastres naturais ou outras tragédias de grande visibilidade, você tem vontade de ajudar como pode, e os golpistas se aproveitam dessas situações. Eles criam sites e contas falsas para doação, depois elaboram um e-mail com tom envolvente para angariar fundos que jamais chegarão às vítimas. Esses golpes dão certo porque apostam no lado solidário das pessoas, mas sempre pesquise antes de contribuir. Inspecione a legitimidade de todos os sites de doações e confira se estão realmente associados aos problemas que dizem representar. Não doe para sites que parecem suspeitos. As instituições beneficentes reais têm sites íntegros, com uma declaração de sua missão e documentos de isenção fiscal.
						 </div>
					 </div>
					 <div className='titulo' > <span> Golpes de beneficiário </span> <span> <button> «  </button> </span>
						<div className='corpo' > 
							Você recebe um e-mail de alguém que precisa transferir dinheiro rapidamente. Muitas vezes, esses e-mails vêm de pessoas que dizem ser da realeza (provavelmente você já ouviu falar do golpe do príncipe da Nigéria), mas, na maioria das vezes, vêm de um "empresário" que diz precisar transferir milhões para fora do país e quer sua ajuda em troca de parte dos lucros. O remetente inclui detalhes suficientes para fazer a oferta parecer legítima. Mas o dinheiro sempre atrasa, e você é forçado a fazer vários pagamentos pequenos para facilitar a transferência dos fundos. É fácil cair nesse golpe quando você está passando por uma maré de azar, mas procure sinais de que as coisas não são o que parecem. A ortografia e a gramática ruins no e-mail original, e um endereço de resposta que não coincide com o do remetente, são provas de que, principalmente na Internet, tudo o que parecer bom demais para ser verdade, nunca é.
						 </div>
					 </div>
				</div>
			</div>
		</div>
			
		</>

	)
}