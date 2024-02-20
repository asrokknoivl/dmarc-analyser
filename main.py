with open("dmarcreport@microsoft.com.txt") as file:
    content = file.read()

def get_block_by_name(text: str ,block_name: str):
    block = []
    # block_limit = 1
    flag = False
    for line in text.split('\n'):
        if block_name in line and flag == False:
            block.append(line.strip())
            flag = True
        elif block_name in line and flag == True:
            block.append(line.strip())
            return "\n".join(block)
        elif flag == True:
            block.append(line.strip())

for record in content.split("<record>"):
    source_ip = get_block_by_name(record, "source_ip")
    policy_evaluated = get_block_by_name(record, "policy_evaluated")
    policy_evaluated_spf = get_block_by_name(policy_evaluated, "spf")
    policy_evaluated_dkim = get_block_by_name(policy_evaluated, "dkim")
    print(source_ip)
    print(policy_evaluated_spf)
    print(policy_evaluated_dkim)
    print()