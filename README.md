# Comandos

A criação de aplicações deve ser feita na raíz do projecto.

## Criar app frontend

```bash
npx nx g @nx/react:app nome_da_aplicacao \
  --directory=apps/nome_da_aplicacao \
  --bundler=vite \
  --routing=true \
  --style=css \
  --unitTestRunner=vitest \
  --e2eTestRunner=playwright
```

## Criar app nas libs

```bash
npx nx g @nx/js:lib nome_da_lib --directory=libs/nome_da_lib --name-and-directory-format=as-provided
```

# Processo NX

Em casos do processo nx estar a rodar, podemos encerrar ele com o comando:

```bash
# Mata todos processos Node.js relacionados ao NX
pkill -f "nx serve"
```

Para listar:

```bash
# Lista processos Node rodando
ps aux | grep "nx serve"
```

Para fazer reset no daemon do NX:

```bash
# Para o daemon do NX
npx nx reset
```
