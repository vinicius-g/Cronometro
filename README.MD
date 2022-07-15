# Cronômetro

Este é um simples cronômetro, que possui a função de marcar o tempo desde que o contador foi iniciado, até o momento em que é pausado.
Suas **funcionalidades** são:
- Apertando no botão **iniciar** ou apertando **CTRL + i**, o contador começará a aumentar. 
    - Dados de tempo: 
        - 1 min = 60 sec
        - 1 sec = 99 cen
- Apertando no botão **pausar** ou apertando **CTRL + p**, o contador irá parar mostrando o instante em que parou.
- Apertando no botão **resetar** ou apertando **CTRL + r**, o contador irá parar e retornar imediatamente ao instante 0.
- O tempo é sempre salvo no local Storage, e fica guardado mesmo se o navegador for fechado.

### **O cronômetro não foi projetado para ir além de 16 horas e 40 minutos.**
### IMPOTRTANTE: Os resultados não são precisos por conta de uma inconsistência do método "setTimeout"!